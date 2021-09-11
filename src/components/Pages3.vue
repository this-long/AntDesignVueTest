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
    <div class="title"><strong>十六、TreeSelect 树型选择控件</strong></div>
    <div class="title">点击组件会拉起小键盘</div>
    <a-tree-select
      show-search
      style="width: 100%"
      :value="value"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="Please select"
      allow-clear
      multiple
      tree-default-expand-all
      @change="onChange"
      @search="onSearch"
      @select="onSelect"
    >
      <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
        <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
          <a-tree-select-node key="random" value="leaf1" title="my leaf" />
          <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
        </a-tree-select-node>
        <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
          <a-tree-select-node key="random3" value="sss">
            <b slot="title" style="color: #08c">sss</b>
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select>
    <a-divider />
    <div class="title"><strong>十七、Upload 上传</strong></div>
    <div class="title">完全可用</div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :default-file-list="defaultFileList"
    >
      <a-button> <a-icon type="upload" /> Upload </a-button>
    </a-upload>
    <a-divider />
    <div class="title"><strong>十八、Calendar 日历</strong></div>
    <div class="title">支持移动端滑动切换</div>
    <div
      :style="{
        width: '300px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
      }"
    >
      <a-calendar :fullscreen="false" />
    </div>
    <a-divider />
    <div class="title"><strong>十九、Carousel 走马灯</strong></div>
    <div class="title">支持移动端滑动切换</div>
    <a-carousel>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>

    <a-divider />
    <div class="title"><strong>二十、Collapse 折叠面板</strong></div>
    <div class="title">完全可用</div>
    <a-collapse accordion>
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel
        key="2"
        header="This is panel header 2"
        :disabled="false"
      >
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>

    <a-divider />
    <div class="title"><strong>二十一、List 列表</strong></div>
    <div class="title">完全可用</div>
    <a-list item-layout="horizontal" :data-source="dataList">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a-list-item-meta>
      </a-list-item>
    </a-list>

    <a-divider />
    <div class="title"><strong>二十二、Popover 气泡卡片</strong></div>
    <div class="title">在移动端Hover事件默认替换为Click事件</div>
    <a-popover title="Title">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button type="primary"> Hover me </a-button>
    </a-popover>

    <a-divider />
    <div class="title"><strong>二十四、Tabs 标签页</strong></div>
    <!-- <div class="title">经典表格</div>
     -->
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
    </a-tabs>

    <a-divider />
    <div class="title"><strong>二十五、Tooltip 文字提示</strong></div>
    <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>
    <a-tooltip placement="topLeft" title="Prompt Text">
      <a-button>Align edge / 边缘对齐</a-button>
    </a-tooltip>
    <a-tooltip placement="topLeft" title="Prompt Text" arrow-point-at-center>
      <a-button>Arrow points to center / 箭头指向中心</a-button>
    </a-tooltip>

    <a-divider />
    <div class="title"><strong>二十六、Tree 树形控件</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>
     -->
    <a-tree
      checkable
      :tree-data="treeData"
      :default-expanded-keys="['0-0-0', '0-0-1']"
      :default-selected-keys="['0-0-0', '0-0-1']"
      :default-checked-keys="['0-0-0', '0-0-1']"
    >
      <span slot="title0010" style="color: #1890ff">sss</span>
    </a-tree>

    <a-divider />
    <div class="title"><strong>二十七、Alert 警告提示</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>
     -->
    <a-alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
    />
    <a-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
    />
    <a-divider />
    <div class="title"><strong>二十八、Drawer 抽屉</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>
     -->
    <div class="title">完全可用</div>

    <a-button type="primary" @click="showDrawer"> Open </a-button>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>

    <a-divider />
    <div class="title"><strong>二十九、Message 全局提示</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>-->
    <div class="title">完全可用</div>

    <a-button style="margin-right: 10px" @click="success"> Success </a-button>
    <a-button style="margin-right: 10px" @click="error"> Error </a-button>
    <a-button style="margin-right: 10px" @click="warning"> Warning </a-button>

    <a-divider />
    <div class="title"><strong>三十、Modal 对话框</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>-->
    <div class="title">完全可用</div>

    <a-button @click="showConfirm"> Confirm </a-button>
    <a-divider />
    <div class="title"><strong>三十一、Notification 通知提醒框</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>-->
    <div class="title">完全可用</div>

    <a-button type="primary" @click="openNotification">
      Open the notification box
    </a-button>

    <a-divider />
    <div class="title"><strong>三十二、Popconfirm 气泡确认框</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>-->
    <div class="title">完全可用</div>

    <a-popconfirm
      title="Are you sure delete this task?"
      ok-text="Yes"
      placement="topLeft"
      cancel-text="No"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">Delete</a>
    </a-popconfirm>

    <a-divider />
    <div class="title"><strong>三十三、加载中</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>-->
    <a-spin size="small" />
    <a-spin />
    <a-spin size="large" />

    <a-divider />
    <div class="title"><strong>三十四、返回顶部</strong></div>
    <!-- <div class="title">可用，由PC端的鼠标悬浮触发变为了点击触发</div>-->
    <a-back-top />
    Scroll down to see the bottom-right
    <strong style="color: rgba(64, 64, 64, 0.6)"> gray </strong>
    button.
  </div>
</template>

<script>
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          { title: "leaf", key: "0-0-0-0", disableCheckbox: true },
          { title: "leaf", key: "0-0-0-1" },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [{ key: "0-0-1-0", slots: { title: "title0010" } }],
      },
    ],
  },
];
const dataList = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const columns1 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true,
  },
];

const data1 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  data() {
    return {
      value: undefined,
      defaultFileList: [],
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      dataList,
      data,
      columns,
      data1,
      columns1,
      treeData,
      visible: false,
      currentNav: ["mail"],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
      this.value = value;
    },
    onSearch() {
      console.log(...arguments);
    },
    onSelect() {
      console.log(...arguments);
    },
    handleChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    success() {
      this.$message.success("This is a success message");
    },
    error() {
      this.$message.error("This is an error message");
    },
    warning() {
      this.$message.warning("This is a warning message");
    },
    showConfirm() {
      this.$confirm({
        title: "Do you want to delete these items?",
        content:
          "When clicked the OK button, this dialog will be closed after 1 second",
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log("Oops errors!"));
        },
        onCancel() {},
      });
    },
    openNotification() {
      this.$notification.open({
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        icon: <a-icon type="smile" style="color: #108ee9" />,
      });
    },
    confirm(e) {
      console.log(e);
      this.$message.success("Click on Yes");
    },
    cancel(e) {
      console.log(e);
      this.$message.error("Click on No");
    },
  },
  created() {
    document.querySelector("html").scrollTop = 0;
  },
};
</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>