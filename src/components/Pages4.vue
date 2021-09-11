<template>
  <div>
    <!-- 导航 -->
    <div>
      <a-menu v-model="currentNav" mode="horizontal">
        <a-menu-item key="1">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/pages2">第二页</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/pages3">第三页</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/pages4">上传组件</router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <a-divider />
    <!-- 导航 end -->
    <div class="title"><strong>上传组件整合</strong></div>
    <div class="title">
      测试结果：经过测试Ant Design Vue上传文件的系列组件均可在手机端正常使用
    </div>
    <div class="title"><strong>1.点击上传</strong></div>
    <div class="title">经典款式，用户点击按钮弹出文件选择框。单选上传</div>
    <a-upload
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      @change="handleChange1"
    >
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
    <a-divider />

    <div class="title"><strong>2.已上传的文件列表 </strong></div>
    <div class="title">展示已上传的文件列表，单选上传</div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :default-file-list="defaultFileList"
    >
      <a-button> <a-icon type="upload" /> Upload </a-button>
    </a-upload>

    <a-divider />

    <div class="title"><strong>3.图片列表样式 </strong></div>
    <div class="title">
      上传文件为图片，可展示本地缩略图。其他类型文件也可以上传，只不过不会展示本地缩略图。单选上传
    </div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      :default-file-list="fileList"
    >
      <a-button> <a-icon type="upload" /> upload </a-button>
    </a-upload>
    <br />
    <br />
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      :default-file-list="fileList"
      class="upload-list-inline"
    >
      <a-button> <a-icon type="upload" /> upload </a-button>
    </a-upload>

    <a-divider />

    <div class="title"><strong>4.文件夹上传 </strong></div>
    <div class="title">支持上传一个文件夹里的所有格式的文件。</div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      directory
    >
      <a-button> <a-icon type="upload" /> Upload Directory </a-button>
    </a-upload>
    <a-divider />

    <div class="title"><strong>5.用户头像 </strong></div>
    <div class="title">
      点击上传用户头像，并可以限制用户上传的图片格式和大小。
    </div>
    <a-upload
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <a-icon :type="loading ? 'loading' : 'plus'" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-divider />

    <div class="title"><strong>6.照片墙 </strong></div>
    <div class="title">
      用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。
    </div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList2"
      @preview="handlePreviewqiang"
      @change="handleChangeqiang"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal
      :visible="previewVisible"
      :footer="null"
      @cancel="handleCancelqiang"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>

    <a-divider />

    <div class="title"><strong>7.自定义预览 </strong></div>
    <div class="title">
      自定义本地预览，用于处理非图片格式文件（例如视频文件）。
    </div>
    <a-upload
      list-type="picture"
      action="//jsonplaceholder.typicode.com/posts/"
      :preview-file="previewFile"
    >
      <a-button> <a-icon type="upload" /> Upload </a-button>
    </a-upload>
    <a-divider />

    <!-- <div class="title"><strong>7.手动上传 </strong></div>
    <div class="title">点击上传按钮后才会将准备上传的文件一起上传</div>
    <a-upload
      :file-list="fileListUpdate"
      :remove="handleRemove"
      :before-upload="beforeUploadUpdate"
    >
      <a-button> <a-icon type="upload" /> Select File </a-button>
    </a-upload>
    <a-button
      type="primary"
      :disabled="fileListUpdate.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUploadUpdate"
    >
      {{ uploading ? "Uploading" : "Start Upload" }}
    </a-button> -->
  </div>
</template>

<script>
// import reqwest from "reqwest";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  data() {
    return {
      currentNav: ["mail"],
      headers: {
        authorization: "authorization-text",
      },
      defaultFileList: [
        {
          uid: "1",
          name: "xxx.png",
          status: "done",
          response: "Server Error 500", // custom error message to show
          url: "http://www.baidu.com/xxx.png",
        },
        {
          uid: "2",
          name: "yyy.png",
          status: "done",
          url: "http://www.baidu.com/yyy.png",
        },
      ],
      fileList: [
        {
          uid: "-1",
          name: "xxx.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          thumbUrl:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "yyy.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          thumbUrl:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
      loading: false,
      imageUrl: "",

      previewVisible: false,
      previewImage: "",
      fileList2: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-3",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-4",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-5",
          name: "image.png",
          status: "error",
        },
      ],
      fileListUpdate: [],
      uploading: false,
    };
  },
  methods: {
    handleChange1(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleChange2({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    handleCancelqiang() {
      this.previewVisible = false;
    },
    async handlePreviewqiang(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChangeqiang({ fileList }) {
      this.fileList = fileList;
    },
    previewFile(file) {
      console.log("Your upload file:", file);
      // Your process logic. Here we just mock to the same file
      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  },
};
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline >>> .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .ant-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .ant-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>