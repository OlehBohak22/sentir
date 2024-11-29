import s from "./SeparateReviewBlock.module.css";

export const SeparateReviewBlock = ({ review }) => {
  return (
    <div className={s.container}>
      <img
        className={s.reviewerAvatar}
        src={review.avatar}
        alt={review.full_name}
      />
      <p className={s.reviewerFullname}>{review.full_name}</p>
      <p className={s.reviewerDirect}>{review.direction}</p>

      <div className={s.reviewContent}>
        <img src="/icons/gradient-quotes.svg" alt="" />
        <p>{review.review}</p>
        <img className={s.rotated} src="/icons/gradient-quotes.svg" alt="" />
      </div>

      <div className={s.reviewerCompany}>
        <img src={review.company_icon} alt={review.company_name} />
        <p>{review.company_name}</p>
      </div>
    </div>
  );
};
