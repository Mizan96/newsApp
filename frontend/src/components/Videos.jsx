function Videos({videoSource}) {
  return (
    <>
    <iframe className='m-2' width="400" height="250" src={videoSource} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </>
  )
}

export default Videos