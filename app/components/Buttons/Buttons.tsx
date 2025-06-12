import styles from "./Buttons.module.css";

type Props = {
  icon?: React.ReactNode; 
  title: string;
  className?: string;
  
  mode?: "fill" | "outline";
  onClick?: () => void;
};

export default function Buttons(props: Props) {
  const buttonClasses = [styles.container];

  if (props.className) {
    buttonClasses.push(props.className);  
  }
  

  return (
    <button onClick={props.onClick} className={buttonClasses.join(" ").trim()}>
       {props.icon && <span className="icon">{props.icon}</span>}
       {props.title}
    
    </button>
  );
}
