import React from "react";

function ContactPage() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
        ante a massa imperdiet, vel eleifend justo mattis. Donec non quam
        egestas, ultricies velit non, venenatis enim.
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
