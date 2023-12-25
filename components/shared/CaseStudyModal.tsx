/* eslint-disable react/no-unescaped-entities */
import PortableText from "react-portable-text";
import Modal from "../shared/Modal";

export default function CaseStudyModal({
  data,
  open,
  setOpen,
}: {
  data: any[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="space-y-6 px-2 mb-8">
        {/* <h2 className="legalDocumentHeader">{data[0]?.title}</h2> */}
        <div className="post-text">
          {/* {
            // @ts-ignore
            data?.[0]?.body?.length > 0 && (
              // @ts-ignore
              <PortableText content={data?.[0]?.body} />
            )
          } */}
        </div>
        <section className="">
          <div className="">
            <div className="flex flex-col lg:flex-row  gap-4">
              <div className="col-span-6 content flex-1">
                <h4>24th December, 2014</h4>
                <h2>Everytime I touch a pencil, I write</h2>
                <div>
                  {
                    // @ts-ignore
                    data[0]?.body?.length > 0 && (
                      // @ts-ignore
                      <PortableText content={data[0]?.body} />
                    )
                  }
                </div>
              </div>
              <div className="flex-[0.45]">
                <h3>Recent posts</h3>
                <ul className="list">
                  <li>
                    <a href="#">Sounds of Amsterdam</a>
                  </li>
                  <li>
                    <a href="#">What's new in 2.0?</a>
                  </li>
                  <li>
                    <a href="#">Bug fixes</a>
                  </li>
                  <li>
                    <a href="#">Do you like it?</a>
                  </li>
                  <li>
                    <a href="#">A Wordpress version is coming!</a>
                  </li>
                </ul>
                <h3>Archives</h3>
                <ul className="list">
                  <li>
                    <a href="#">November 2014</a>
                  </li>
                  <li>
                    <a href="#">October 2014</a>
                  </li>
                  <li>
                    <a href="#">September 2014</a>
                  </li>
                </ul>
                <h3>Meta</h3>
                <ul className="list">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Entries RSS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
}
