
type ButtonProps = {
    text: string;
  };

  
export default function Mybutton({ text }: ButtonProps) {
    return(
      <button className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
      Save Changes {text}
    </button>
  )
  }
