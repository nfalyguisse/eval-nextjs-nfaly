import contactAction from "@/actions/contact";

export default function ContactForm({
  emailsAdmin,
}: {
  emailsAdmin: Array<string>;
}) {
  return (
    <form action={contactAction} className="mt-10 flex flex-col gap-4">
      <input type="hidden" name="email" value={emailsAdmin} />
      <textarea
        name="message"
        placeholder="Postuler à cette offre ..."
        rows={5}
        className="w-full border  px-4 py-3 text-sm text-gray-700 placeholder-gray-400"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 text-sm font-medium"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
