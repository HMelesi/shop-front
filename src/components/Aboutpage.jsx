import React from "react";
import lizzbeach from "../assets/images/lizzbeach.JPG";
import lizzwork from "../assets/images/bwlizzwork.png";

const Aboutpage = () => {
  return (
    <div class="justify-content-center text-center">
      <h2 class="mx-3 my-3 fontstyle-title lead text-left fontcolor-next">
        Hi, I'm Lizzie.
      </h2>
      <img src={lizzbeach} class="img-fluid" alt="Lizzie on a beach" />
      <div class="container-fluid my-5 px-5">
        <div class="row">
          <div class="col-md-8 d-flex align-items-center pb-5">
            <p class="fontstyle-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices cursus tristique. Quisque et massa semper, rhoncus magna
              non, suscipit massa. Aenean ac scelerisque lacus. In blandit leo
              ut enim pretium, ac rutrum odio placerat. Praesent ac lobortis
              tortor. Nunc pharetra velit eros, eu elementum purus elementum
              vel. In hac habitasse platea dictumst.<br></br>
              <br></br>
              Donec vitae vehicula nibh. Nulla varius vitae libero in posuere.
              Mauris sollicitudin turpis in est commodo euismod sit amet a nunc.
              Aliquam erat volutpat. Pellentesque molestie non tellus ut
              ultrices. Nam vitae suscipit diam, at scelerisque odio. Vivamus
              iaculis semper commodo.<br></br>
            </p>
          </div>
          <div class="col-md-4">
            <img
              src={lizzwork}
              class="img-fluid rounded"
              alt="Lizzie in the studio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
