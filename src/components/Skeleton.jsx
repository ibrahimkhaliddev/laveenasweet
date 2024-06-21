import { useEffect } from "react"

const Skeleton = ({
  width="40px", 
  height="40px", 
  borderRadius="4px",
  margin="0",
  marginTop="0",
  marginBottom="0",
  marginLeft="0",
  marginRight="0"
}) => {
  const skeletonStyle = {
    width: width,
    height: height,
    background:"linear-gradient(90deg, #F2F2F2 0%, #E7E7E7 25.52%, #F1F1F1 50%, #E7E7E7 75.52%, #F2F2F2 100%)",
    backgroundSize:"800% 100%",
    borderRadius:borderRadius,
    animation:"skeletonAnim 2s infinite linear",
    margin:margin,
    marginTop:marginTop,
    marginBottom:marginBottom,
    marginLeft:marginLeft,
    marginRight:marginRight
  }

  useEffect(() => {

  })

  return (
    <div className="skeleton" style={skeletonStyle}/>
  )
}

export default Skeleton