function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>

      <form className="max-w-md mx-auto mt-8 flex flex-col gap-4">
        <input placeholder="Name" className="border p-2" />
        <input placeholder="Email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2" />

        <button className="bg-black text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;