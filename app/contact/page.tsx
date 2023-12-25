/* eslint-disable react/no-unescaped-entities */
export default function page() {
  return (
    <div className="content">
      <section className="section-size-4 lighter-bg">
        <div className="container">
          <div className="grid">
            <div className="column-6">
              <h4>Whatever you need,</h4>
              <h1 className="animated-text">Let's nail it.</h1>
              <p>
                Whether you have a simple question or know exactly what you
                want. We know how to build the next steps for your business.
              </p>
              <div className="space-3"></div>
              <form className="box white shadow text-left">
                <label>Name</label>
                <input
                  name="Name"
                  id="Name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
                <label>Email</label>
                <input
                  name="Email"
                  id="Email"
                  type="email"
                  placeholder="e.g. johndoe@example.com"
                  required
                />
                <label>Phone</label>
                <input
                  name="Tel"
                  id="Tel"
                  type="number"
                  placeholder="The number we can dial"
                />
                <label>Message</label>
                <textarea
                  name="Message"
                  id="Message"
                  placeholder="How may we help?"
                  required
                ></textarea>
                <button className="button" type="submit">
                  Submit
                </button>
              </form>
              <div className="space-3"></div>
            </div>
            <div className="column-5 offset-1 text-right">
              <h5>New York HQ</h5>
              <p>
                808 Thunder lane
                <br />
                13731, NEW YORK
              </p>
              <div className="space-3"></div>
              <h5>Amsterdam</h5>
              <p>
                Oudegracht 911
                <br />
                1097AX, AMSTERDAM
              </p>
              <div className="space-3"></div>
              <h5>Paris</h5>
              <p>
                72 rue La Boétie
                <br />
                75015, PARIS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
