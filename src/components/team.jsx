import * as React from "react";

function TeamMember({ imgSrc, name, title }) {
  return (
    <article className="flex flex-col w-full sm:w-1/2 lg:w-1/4 p-4">
      <img
        loading="lazy"
        src={imgSrc}
        alt={name}
        className="w-full aspect-ratio-[4/3] object-cover"
      />
      <h2 className="mt-4 text-xl font-bold tracking-tight leading-8 text-gray-900">
        {name}
      </h2>
      <p className="mt-2 text-lg tracking-normal leading-7 text-gray-900">
        {title}
      </p>
    </article>
  );
}

function Team() {
  const teamMembers = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/191cd4946c126fb603bd2d235c4bc8a50a15ec56b5b874a6d432d90205f4f936?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&",
      name: "Jayith",
      title: "Team Leader",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1aa484b096efd982c17829a912d74329ab81001c4ad1da0197618eb5ae4719c7?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&",
      name: "Kushan Anutthara",
      title: "Manager",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a526d51b880f5455948aec3ff5cb0fca1f4b09c016232f7e8057df97104641dd?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&",
      name: "Nethmin Gomez",
      title: "Secretary",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0ba683f74943142ccaf0fc039abf04fa47637ba466b6819719847d5b3f76f6c6?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&",
      name: "Geenadi Dhanayake ",
      title: "Creative Director",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1bdd6ebeb5bb2d2cbccb01e077f6b83d945305173ef38c2045c16da7de4088cc?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&",
      name: "Uvindu Perera",
      title: "Lead Programmer",
    },
    
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4257f727112b2bed686495d55fbe6dcf22640f332af711cf27fe525cb69f914f?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&",
      name: "Agitha Perera",
      title: "UX Designer",
    },
  ];

  // Create team member elements
  const teamMemberElements = teamMembers.map((member, index) => (
    <TeamMember key={index} {...member} />
  ));

  // Insert the CTA box at position 7 (which is the last element of the second row)
  teamMemberElements.splice(
    7,
    0,
    <aside
      key="cta"
      className="flex flex-col justify-center w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg text-center items-start py-[4] px-10"
    >
      
    </aside>,
  );

  return (
    <section className="flex flex-col bg-white items-center text-center px-5 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Meet our team</h1>
        <p className="mt-2">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <p> Build your network consultancy website within few minutes.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center">
          {teamMemberElements}
        </div>
      </div>
    </section>
  );
}

export default Team;
