const MyResult = ({  value }) => {

    return (
      <div className="form-group">
        <textarea
          value={value}
          readOnly // Empêche la modification du champ de texte
          className="form-control heute mt-4"
        />
      </div>
    );
  }

export default MyResult;
