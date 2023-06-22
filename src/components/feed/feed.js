import React from "react";
import { Dropdown, Space, Button } from "antd";
import {
  CommentOutlined,
  DislikeFilled,
  LikeFilled,
  PlusOutlined,
  SendOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Items } from "../items/item";

const Feed = () => {
  return (
    <div>
      <a className="post-bar" href="/">
        <p>Post Something...</p>

        <Button type="primary" shape="circle">
          <PlusOutlined />
        </Button>
      </a>
      <div className="filter-bar">
        <div className="filter-sub-list">
          <p>All</p>
          <p>Polls</p>
          <p>Initiatives</p>
        </div>
        <p>
          <Dropdown
            menu={{
              Items,
            }}
            trigger={["click"]}
          >
            <a href="/" onClick={(e) => e.preventDefault()}>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </p>
      </div>
      <div className="post-container">
        <div className="head-stack">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="top"
          >
            <button>catagories</button>
            <p>...</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
            }}
            className="head"
          >
            <img
              className="avatar-head"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
              alt=""
            />
            <p>rjmnhr</p>
          </div>
          <div className="content">
            <h3>Title</h3>
            <p>Description</p>
            <p style={{ color: "red" }}>#tags</p>
            <img
              src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
              alt=""
            />
          </div>
        </div>
        <div className="body-stack">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <LikeFilled />
            <p>0</p>
            <DislikeFilled />
            <p>0</p>
            <CommentOutlined />
            <p>0</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              className="avatar-head"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
              alt=""
            />
            <div className="comment-box">
              <input type="text" className="comment-input" />
              <button>
                Post <SendOutlined />
              </button>
            </div>
          </div>
          <p
            style={{
              margin: "20px 0px 0px 0px ",
              fontSize: "14px",
              color: "blue",
            }}
          >
            View all comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
