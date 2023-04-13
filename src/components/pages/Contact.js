import React from "react";

function Contact() {
  return (
    <form>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="name" class="form-control" aria-describedby="name" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" aria-describedby="email" />
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">
        Contact Me
      </button>
    </form>
  );
}

export default Contact;
