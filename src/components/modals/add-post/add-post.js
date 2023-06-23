import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import "./add-post-style.css";
import { Catagories } from "../../catagories-list";

const AddPostModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const chooseFile = (e) => {
    e.preventDefault();
    document.querySelector("#file-upload").click();
  };
  return (
    <>
      <p className="post-bar" onClick={showModal}>
        <p>Post Something...</p>

        <Button type="primary" shape="circle">
          <PlusOutlined />
        </Button>
      </p>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h1>Create Post</h1>
        <div className="post-form">
          <form>
            <input type="text" placeholder="Add your post title" />
            <input placeholder="whats's on your mind" />
            <input type="text" placeholder="hashtags" />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <select>
                <option>Select a category</option>
                {Catagories.map((item) => (
                  <option value={item.cat}>{item.cat} </option>
                ))}
              </select>
              <input type="file" id="file-upload" style={{ display: "none" }} />
              <button className="img-btn" onClick={(e) => chooseFile(e)}>
                Upload image
              </button>
            </div>
            <button className="post-btn" type="submit">
              Post
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddPostModal;
