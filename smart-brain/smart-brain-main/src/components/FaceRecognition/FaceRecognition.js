import "./FaceRecognition.css"

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="flex justify-center sm:w-full md:w-1/2 h-auto m-auto my-4">
      <div className="absolute mt2 shadow-5 ma3" style={{ maxWidth: 800 }}>
        <img alt="" src={imageUrl} id="inputimage" />
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default FaceRecognition
