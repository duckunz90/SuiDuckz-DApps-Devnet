import TeamMemberStyleWrapper from "./TeamMember.style";

const TeamMember = ({ avatar, name, designation, socialLinks }) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <TeamMemberStyleWrapper>
      <div className="suiduckz_team_card">
        <div className="team_member_img">
          <img src={avatar} alt="suiduckz nft team avatar" />
        </div>
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <span className="hover_shape hov_shape1">
          
        </span>
        <span className="hover_shape hov_shape2">
         
        </span>

        <div className="team_social_icon">
          <ul>
            {socialLinks?.map((item, i) => (
              <li key={i}>
                <a href={item.url}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    openInNewTab(item.url);
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ cursor: "pointer" }}
                >
                  <img src={item.icon} alt="icon" style={{ cursor: "pointer" }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
