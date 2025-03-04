import React from "react";
import Styles from "@/styles/dashboard/teams.module.css";
import Card from "@/components/dashboard/Card";
import ProgressBar from "./ProgressBar";

const Teams = () => {
  const teamData = [
    {
      title: "Teams",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Project Worked",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Work For The Day",
      worked: "60%",
      progress: "60%",
    },
    {
      title: "Worked Member",
      worked: "13/19",
      progress: "68%",
    },
  ];
  const data = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
      project: "Chakra Soft UI Version",
      people: [
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
        "https://ashisheditz.com/wp-content/uploads/2023/09/cute-whatsapp-dp-images.jpg",
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
        "https://ashisheditz.com/wp-content/uploads/2023/09/cute-whatsapp-dp-images.jpg",
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
        "https://ashisheditz.com/wp-content/uploads/2023/09/cute-whatsapp-dp-images.jpg",
      ],
      budget: "$1400",
      completion: "60%",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdwb2dalJABwI2v_OVEgwtdgWk0S8Z85eCUdkCXC5f3Zz9kxA-rm4_zPkrLBmsv_Ntn4&usqp=CAU",
      project: "Add progress Track",
      people: [
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
        "https://ashisheditz.com/wp-content/uploads/2023/09/cute-whatsapp-dp-images.jpg",
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
        "https://ashisheditz.com/wp-content/uploads/2023/09/cute-whatsapp-dp-images.jpg",
      ],
      budget: "$4000",
      completion: "10%",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
      project: "Fix Platform Errors",
      people: [
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
      ],
      budget: "$2200",
      completion: "100%",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
      project: "Launch our Moobile App",
      people: [
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
      ],
      budget: "$1400",
      completion: "60%",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
      project: "Add the new Pricing Page",
      people: [
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
      ],
      budget: "$500",
      completion: "80%",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
      project: "Redesign New Online Shop",
      people: [
        "https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg",
      ],
      budget: "$7400",
      completion: "40%",
    },
  ];
  return (
    <>
      <div className={Styles.cardContainer}>
        {teamData.map((item, i) => (
          <Card
            key={i}
            title={item?.title}
            subTitle={item?.worked}
            progress={item?.progress}
            progressBar={true}
          />
        ))}
      </div>
      <div className={Styles.container}>
        <strong>
          Project by All Teams <img src="assets/3dotV.svg" />
        </strong>
        <div className={Styles.checktypo}>
          <img src="assets/dashboard/check.svg" />{" "}
          <div style={{ fontWeight: "700" }}>30 done</div>
          <div style={{ fontWeight: "400" }}>&nbsp;this month</div>
        </div>
        <table className={Styles.customTable}>
          <thead>
            <tr>
              <th>PROJECT</th>
              <th>TEAMS</th>
              <th>BUDGET</th>
              <th>COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>
                  <img
                    style={{
                      marginRight: "10px",
                      marginLeft: "0px",
                      borderRadius: "0px",
                    }}
                    src={item?.icon}
                    alt={item?.project}
                  />
                  {item?.project}
                </td>
                <td>
                  {item?.people?.map((icon, ind) => (
                    <img key={ind} src={icon} alt={"img"} />
                  ))}
                </td>
                <td>{item?.budget}</td>
                <td>
                  <div>{item?.completion}</div>
                  <ProgressBar
                    width={"80%"}
                    height={"4px"}
                    marginTop={"3px"}
                    backgroundColor={"#E2E8F0"}
                    progressData={item?.completion}
                    progressColor={"#5D5FEF"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Teams;
