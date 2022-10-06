function ContactContent() {
  return (
    <div className="flex flex-col items-center w-5/6 gap-10 center-container">
      <h1 className="text-2xl font-extrabold">Need To Contact Us?</h1>

      <a href="mailto: abc@example.com" className="w-full">
        <div className="flex flex-col items-center justify-center  p-5 bg-white rounded min-h-[180px]">
          <h1 className="pb-5 text-2xl font-bold text-accent-two">Email</h1>
          <p className="text-2xl font-bold text-black">workoutplus@gmail.com</p>
        </div>
      </a>

      <a href="tel: 555-555-5555" className="w-full">
        <div className="flex flex-col items-center justify-center p-5 bg-white rounded min-h-[180px]">
          <h1 className="pb-5 text-2xl font-bold text-accent-two">Phone</h1>
          <p className="text-2xl font-bold text-black">1-888-213-1234</p>
        </div>
      </a>
    </div>
  );
}

export default ContactContent;
