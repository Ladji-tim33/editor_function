const ButtonDowlond = ({ className, onClick, children }) => {
    return (
      <div className="mt-4 text-center mb-4">
        <button className={className} onClick={onClick}>{children}</button>
      </div>
    );
  }
  
  export default ButtonDowlond;