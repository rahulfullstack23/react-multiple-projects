import classes from "./ProfileCard.module.css";
// import profileImg from '../assets/profile.jpeg';

const ProfileCard = () => {
  const user = {
    name: "Rahul",
    role: "Frontend Engineer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    // avatar:profileImg,
    isOnline: true,
    skills: ["React ", "JavaScript ", "Tailwind CSS ", "TypeScript"],
    bio: "Passionate about building intuitiative, accessible UI/UX web experiences.",
  };
  return (
    <div className={classes.profile}>
      <div className={classes.profile_header}>
        <img src={user.avatar} />
        <h1>{user.name}</h1>
        <p>{user.role}</p>
        <span>{user.isOnline ? "Online" : "Offline"}</span>
      </div>
      <div className={classes.profile_footer}>
        <div>
          {user.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
        
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
