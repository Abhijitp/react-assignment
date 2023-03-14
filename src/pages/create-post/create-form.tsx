import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  body: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    body: yup.string().required("You must add a description."),
  });

  const { register, handleSubmit, formState: { errors }} = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const eventsRef = collection(db, "events");

  const onCreateEvent = async (data: CreateFormData) => {
    console.log({
      ...data,
      createdAt: new Date().toISOString(),
      username: user?.displayName,
      userId: user?.uid,
    });
    await addDoc(eventsRef, {
      ...data,
      createdAt: new Date().toISOString(),
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreateEvent)}>
      <input placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}> {errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("body")} />
      <p style={{ color: "red" }}> {errors.body?.message}</p>
      <input type="submit" className="submitForm" />
    </form>
  );
};
