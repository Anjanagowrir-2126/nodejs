let name = "Anjana";
let comment = "The food was really tasty and the service was excellent.";

let review = {
    name: name,
    comment: comment
};

function thankYou(review) {
    let customerName = review.name.toUpperCase();
    let shortComment = review.comment.substring(0, 20);

    console.log("Thank you " + customerName + " for your review: " + shortComment);
}

thankYou(review);