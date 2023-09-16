<template>
  <button @click="showTemplate = !showTemplate" class="add-reviews-button">
    {{ showTemplate ? "Hide Reviews" : "Add Reviews" }}
  </button>
  <div v-if="showTemplate" class="container">
    <p>
      We strive to provide the best possible service for our clients. Please
      leave a review to let us know how we are doing and to share your
      experience with others.
    </p>
    <form id="review-form" action="index.html" method="post">
      <h2>Write Your Review</h2>
      <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="5 stars">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="4 stars">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="3 stars">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="2 stars">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="1 star">1 star</label>
      </div>
      <div class="form-group">
        <label class="control-label" for="review">Your Review:</label>
        <textarea
          class="form-control"
          rows="10"
          placeholder="Your Review"
          name="review"
          id="review"
        ></textarea>
        <span id="reviewInfo" class="help-block pull-right">
          <span id="remaining">999</span> Characters remaining
        </span>
      </div>
      <a href="#" id="submit" class="btn btn-primary">Submit</a>
      <input id="submitForm" type="submit" style="display: none" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTemplate: false,
    };
  },
};
</script>
<style>
.rate {
  height: 46px;
  padding: 0 10px;
}

.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}

.rate:not(:checked) > label:before {
  content: "★ ";
}

.rate > input:checked ~ label {
  color: #ffc700;
}

.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}

.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

#review-form .input-group-addon {
  min-width: 100px;
}

#review-form .btn {
  min-width: 100px;
}

#review-form input[type="text"],
#review-form textarea {
  width: 100%;
}

#review-form .form-group {
  margin-bottom: 15px;
}

#review-form .help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid rgb(238, 238, 238);
  padding-left: 20px;
}

blockquote .footer {
  display: block;
  font-size: 80%;
}
.add-reviews-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px; /* Adjust padding for the normal state */
  border: none;
  cursor: pointer;
  border-radius: 4px;
  float: right; /* Align the button to the right */
  margin-left: 20px; /* Add margin to separate the button from the content */
  text-align: center; /* Center the text within the button */
  transition: none; /* Disable hover effect transition */
}

.add-reviews-button:hover {
  background-color: #0056b3;
  padding: 10px 20px; /* Adjust padding for the hover state to match normal state */
}
</style>
