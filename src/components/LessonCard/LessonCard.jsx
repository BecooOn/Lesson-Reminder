import LessonStyle from "./lesson.module.scss";
let count = 6;

const LessonCard = ({ data, clear, setClear }) => {
  // console.log(clear);
  // console.log(date);
  const handleClear = () => {
    setClear(!clear);
    count = !clear ? 0 : 6;
  };
  return (
    <>
      <h2 className={LessonStyle.title}>You have to study {count} lessons</h2>
      {!clear ? (
        <>
          <div className={LessonStyle.container}>
            {data.map((item, i) => (
              <div className={LessonStyle.card} key={i}>
                <div className={LessonStyle.text}>
                  <img src={item.image} alt="" width="50px" />

                  <p>
                    <span>Lesson Name:</span>{" "}
                    <span className={LessonStyle.variables}>{item.name}</span>
                  </p>
                  <p>
                    <span>Lesson Hour:</span>{" "}
                    <span className={LessonStyle.variables}>{item.hour}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={LessonStyle.btns}>
            <button className="btn btn-danger clearBtn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2 className={LessonStyle.title}>
            There are some lessons in tomorrow, as well! Look at them!
          </h2>
          <div className={LessonStyle.btns}>
            <button onClick={handleClear} className="btn btn-warning">
              Tomorrow
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LessonCard;
