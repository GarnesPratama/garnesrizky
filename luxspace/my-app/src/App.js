import React, { Component } from "react";
import { LinkHTMLAttributes } from "react";

class header extends Component {
  render() {
    return (
      <div className="border-b-2 border-blank">
        <div className="container mx-auto ">
          <div className=" my-5 ">
            <nav className="navbar ">
              <div className="list justify-end flex  ">
                <ul className=" mx-14 flex  gap-x-6 font-sans -mt-7 font-medium text-base invisible lg:visible  ">
                  <LinkHTMLAttributes to="">
                    <li className="hover:text-blue text-blue">Home</li>{" "}
                  </LinkHTMLAttributes>

                  <li className="hover:text-blue">Browse By</li>

                  <li className="hover:text-blue">Stories</li>

                  <li className="hover:text-blue">Agents</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
