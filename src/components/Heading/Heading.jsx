import './Heading.css'
export default function PrimaryHeading({text}) {
    return (
      <>
        <div className="heading-container">
            <h1>{text}</h1>
        </div>
      </>
    );
  }
  