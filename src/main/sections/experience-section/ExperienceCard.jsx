import React from "react";

const ExperienceCard = () => {
  return (
    <div className="experience_card">
      <div className="experience_card_body">
        <div className="company_section">
          <h2 className="company_name">Company Name</h2>
          <div className="start_end_date"><span>From - To</span></div>
          <div className="company_location"><span>Location</span></div>
          <p className="company_description">
            Vivamus et lacus tincidunt, sodales odio in, congue lacus. Morbi et
            tortor luctus, pulvinar nulla eu, lobortis dui. Fusce egestas tellus
            ac neque volutpat, ut tempor augue venenatis. Nunc malesuada mauris
            ornare ullamcorper finibus. Integer ac libero urna. Nulla auctor a
            purus sagittis blandit. Sed rutrum lacus ac lobortis blandit. Fusce
            commodo, libero ut consectetur condimentum
          </p>
        </div>
        <div className="responsibility_section">
          <h3 className="responsibility_heading">Responsibilities</h3>
          Etiam a mi tristique, sodales sem sit amet, posuere odio. Curabitur
          aliquet leo eget eros blandit ultrices. Vestibulum laoreet sapien eget
          iaculis scelerisque. Nunc tincidunt urna ac mi tristique, sit amet
          ultrices ligula imperdiet. Nam fringilla elit vitae arcu rutrum, sed
          molestie ipsum molestie.
        </div>
      </div>
    </div>
  );
};

export default React.memo(ExperienceCard);
