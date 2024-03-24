import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "매우 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "무난",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "매우 나쁨",
  },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth();
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = () => {
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.name;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const emotionId = 1;

  return (
    <div className="Editor">
      <section className="date_section">
        <h3>오늘의 날짜</h3>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createDate)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h3>오늘 감정</h3>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h3>오늘의 일기</h3>
        <textarea name="" id="" placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text="취소하기" />
        <Button text="작성완료" type="POSITIVE" />
      </section>
    </div>
  );
};

export default Editor;
