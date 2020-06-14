import React, { useState, useEffect, useRef } from "react";
import './styles.less'

const ITEMS_NUM = 20;

let data = []
for (let i = 0; i < 100; i++) {
  data.push(i)
}

export default function SlidingWindowScrolHook (props) {
  // const { data, height } = props;
  // 目前的起始点和结束点的位置index
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(ITEMS_NUM);
  const topRef = useRef();
  const bottomRef = useRef();
  /*
    这里使用observer的原因说一下，因为在new IntersectionObserver调用的时候是传入一个回调函数，而容易因为作用域闭包的问题，使值没有被更新，
    而使用useRef能够获得对应的值。
  */
  const observer = useRef();
　// 使用disconnect将保存的Observer实例中监听的函数全部解散
  const resetObserver = () => {
    observer.current.disconnect();
  };

  const initObserver = () => {
    const Observer = new IntersectionObserver(entries => {
      entries.forEach(elem => {
        if (elem.isIntersecting) {
          // 在创建元素的时候，定位了元素的第一个和最后一个子元素的位置
          // 通过id来实现对于第一和最后一个子元素的监听过程
          if (elem.target.id === "bottom") {
            // 确定新的加载的元素的index
            const newStart =
              end - 10 <= data.length - ITEMS_NUM
                ? end - 10
                : data.length - ITEMS_NUM;
            const newEnd = end + 10 <= data.length ? end + 10 : data.length;

            if (newStart !== start || newEnd !== end) {
              resetObserver();

              setStart(newStart);
              setEnd(newEnd);
            }
          } else if (elem.target.id === "top") {
            const newStart = start - 10 >= 0 ? start - 10 : 0;
            const newEnd =
              end === ITEMS_NUM
                ? ITEMS_NUM
                : end - 10 > ITEMS_NUM
                ? end - 10
                : ITEMS_NUM;
            /* 
              这里的判断条件一定要有
              因为当滑到底部的时候，因为我们是绑定第一个元素并且监听第一个元素是否出现，利用margin模拟滚动条的
              因此一定会出发top的方法，这里就是要判断如果start和newStart相同，说明是重叠的情况，就是上述的场景，因此需要禁用掉更新
            */
            if (newStart !== start || newEnd !== end) {
              resetObserver();
              setStart(newStart);
              setEnd(newEnd);
            }
          }
        }
      });
    });

    bottomRef.current && Observer.observe(bottomRef.current);
    bottomRef.current && Observer.observe(topRef.current);
    observer.current = Observer;
  };

  useEffect(() => {
    initObserver();
    return () => {
      resetObserver();
    };
  }, [end]);

  return (
    <ul style={{ position: "relative" }} className='pages-demo'>
      {data.slice(start, end).map((elem, index) => {
        const id =
          index === 0 ? "top" : index === end - start - 1 ? "bottom" : null;
        const selectRef =
          index === 0 ? topRef : index === end - start - 1 ? bottomRef : null;

        const top = (index + start) * '200';

        return (
          <li
            style={{ top,  position: "absolute" }}
            id={id}
            ref={selectRef}
            key={`items-${index}`}
          >
            {elem}
          </li>
        )
      })}
    </ul>
  )
}