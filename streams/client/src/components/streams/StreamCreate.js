import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // renderInput = ({ input, label, meta }) => {
  //   const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} />
  //       <div className="ui error message">
  //         {meta.touched ? meta.error : null}
  //       </div>
  //     </div>
  //   );
  // };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      // <form
      //   onSubmit={this.props.handleSubmit(this.onSubmit)}
      //   className="ui form error"
      // >
      //   <Field name="title" component={this.renderInput} label="Enter Title" />
      //   <Field
      //     name="description"
      //     component={this.renderInput}
      //     label="Enter Description"
      //   />
      //   <button className="ui button primary">Submit</button>
      // </form>
      <div>
        <h3>
          <StreamForm onSubmit={this.onSubmit} />
        </h3>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
