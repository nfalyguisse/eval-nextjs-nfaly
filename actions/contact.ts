"use server";

export default async function contactAction(formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("email: ", email);
  console.log("message: ", message);

  return {
    email,
    message,
  };
}
