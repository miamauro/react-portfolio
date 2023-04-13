import React from "react";

function Contact() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="name" className="form-control" aria-describedby="name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" aria-describedby="email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Contact Me
      </button>
    </form>
  );
}

export default Contact;
