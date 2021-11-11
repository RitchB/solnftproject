export default function TailwindCSSButton(props) {
  return (
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
      {props.children}
    </button>
  );
}