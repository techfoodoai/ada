"use client";

const Contact = ({}) => {
  return (
    <section
      id="ora"
      className="flex w-full items-center justify-center bg-transparent"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5804559388694!2d-2.1903720234063497!3d53.440209372316694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3c15b7ee68d%3A0xb65f11d5d1fe21f7!2sAbaseen!5e0!3m2!1sen!2sin!4v1748078851222!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[350px] w-full grayscale invert"
      ></iframe>
    </section>
  );
};

export default Contact;
