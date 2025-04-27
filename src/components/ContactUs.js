const ContactUs = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl ">Contact us</h1>
      <form>
        <input className="border border-black m-2" name="username" />
        <input className="border border-black m-2" name="message" />
        <button className="p-2 rounded-sm bg-green-400">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
