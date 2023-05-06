export default function Layout(props) {
 
  return (
    <div>
        {props.children}
      
        {props.modal}
    </div>
  );
}