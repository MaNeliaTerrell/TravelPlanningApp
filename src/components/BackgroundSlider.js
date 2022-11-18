// import React from "react";
// import '../../src/App.css'

// const funPics = [
//     "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/24/2022/10/10-04-2022-PR-USAID-Gives-Awards-to-Four-Outstanding-Marine-Protected-Areas-in-Palawan-resized-2.png",
//     "https://a.cdn-hotels.com/gdcs/production129/d1719/eaa3ce8a-cb82-4e0c-9b8a-1dda760d14d2.jpg?impolicy=fcrop&w=800&h=533&q=medium.jpg",
//     "https://www.journeyera.com/wp-content/uploads/2016/11/what-to-do-in-coron-04908.jpg",
//     "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/11/b7/a0.jpg",
//     "https://elnido-hotels.com/wp-content/uploads/2019/05/activities.jpg",
//     "https://www.beautifulworld.com/wp-content/uploads/2016/10/PALAWAN-ISLAND.jpg",
//     "https://i0.wp.com/thetravellingfeet.com/wp-content/uploads/2020/10/palawan-best-island-in-the-philippines.jpg?fit=1070%2C647&ssl=1.jpg",
//     "https://i0.wp.com/www.tikigo.com/wp-content/uploads/linapacan-island-palawan.jpg?resize=800%2C534&ssl=1.jpg",
//     "https://www.travel-palawan.com/wp-content/uploads/2018/03/beach-1.jpg" ]
// const delay = 2500;

// function BackgroundSlider() {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === funPics.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {funPics.map((img, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ img }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {funPics.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BackgroundSlider
