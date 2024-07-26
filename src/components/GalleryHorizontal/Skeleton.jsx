import React from "react";
import './Skeleton.scss'
const Skeleton = () => {
    const number_of_skeleton = new Array(15).fill(0)
  return (
    <div className="listing">
      <ul class="card__list">
        {number_of_skeleton.map((ele)=>{
            return (<li class="list__item">
                <div class="card">
                  <div class="card__header">
                    <div class="card__avatar"></div>
                  </div>
                  <div class="card__content">
                    <div class="card__title"></div>
                    <div class="card__desc"></div>
                    <div class="card__desc"></div>
                    <div class="card__desc"></div>
                  </div>
                </div>
              </li>)
        })}
        
      </ul>
    </div>
  );
};

export default Skeleton;
