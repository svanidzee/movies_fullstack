import ReviewsDAO from '../dao/reviewsDAO.js';

export default class ReviewsController {
  static async apiPostReview(req, res) {
    try {
      const movieId = req.body.movie_id;
      const review = req.body.review;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };

      const date = new Date();

      const ReviewResponse = await ReviewsDAO.addReview(
        movieId,
        userInfo,
        review,
        date,
      );
      console.log(ReviewResponse);

      res.json({ status: 'success ' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateReview(req, res) {
    try {
      const reviewId = req.body.review_id;
      const review = req.body.review;

      const date = new Date();

      const ReviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id,
        review,
        date,
      );
      console.log(ReviewResponse);

      var { error } = ReviewResponse;
      if (error) {
        res.status.json({ error });
      }

      if (ReviewResponse.modifiedCount === 0) {
        throw new Error(
          'unable to update review. User may not be original poster',
        );
      }
      res.json({ status: 'success ' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
