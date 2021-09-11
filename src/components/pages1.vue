<template>
  <div>
    <div class="title"><strong>测试总结：</strong></div>
    <p>
      1.表格于级联选择器等组件本身就比较大，而且格式特殊，不建议在手机端使用
    </p>
    <p>
      2.日期选择框、Select选择器、时间选择框、树形选择控件点击后会自动拉起小键盘，但是不支持小键盘输入内容。
    </p>
    <p>3.在PC端通过鼠标移入触发的事件在手机端会默认替换为点击触发</p>
    <p>4.除以上提到的组件其他组件均可在手机端正常使用</p>
    <a-divider />

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

    <div class="title"><strong>一、下拉菜单</strong></div>
    <div class="title">鼠标移入事件不可用</div>
    <template>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          Cascading menu <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>1st menu item</a-menu-item>
          <a-menu-item>2nd menu item</a-menu-item>
          <a-sub-menu key="test" title="sub menu">
            <a-menu-item>3rd menu item</a-menu-item>
            <a-menu-item>4th menu item</a-menu-item>
          </a-sub-menu>
          <a-sub-menu title="disabled sub menu" disabled>
            <a-menu-item>5d menu item</a-menu-item>
            <a-menu-item>6th menu item</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-dropdown>
    </template>
    <a-divider />

    <div>即便是鼠标移入触发在移动端也会被默认替换为点击触发</div>
    <template>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          Hover me <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </template>
    <a-divider />

    <div class="title"><strong>二、Menu 导航菜单</strong></div>
    <div class="title">完全可用</div>

    <template>
      <div style="width: 256px">
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="toggleCollapsed"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"
              ><a-icon type="mail" /><span>Navigation One</span></span
            >
            <a-menu-item key="5"> Option 5 </a-menu-item>
            <a-menu-item key="6"> Option 6 </a-menu-item>
            <a-menu-item key="7"> Option 7 </a-menu-item>
            <a-menu-item key="8"> Option 8 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"
              ><a-icon type="appstore" /><span>Navigation Two</span></span
            >
            <a-menu-item key="9"> Option 9 </a-menu-item>
            <a-menu-item key="10"> Option 10 </a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11"> Option 11 </a-menu-item>
              <a-menu-item key="12"> Option 12 </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
        <a-divider />
      </div>
    </template>

    <div class="title"><strong>三、Pagination 分页</strong></div>
    <div class="title">完全可用</div>

    <a-pagination size="small" :total="50" />
    <a-pagination
      size="small"
      :total="50"
      :show-total="(total) => `Total ${total} items`"
    />
    <a-divider />

    <div class="title"><strong>四、steps 步骤条</strong></div>
    <div class="title">移动端默认转换为竖向步骤条</div>

    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div class="steps-content">
        {{ steps[current].content }}
      </div>
      <div class="steps-action">
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          @click="next"
        >
          Next
        </a-button>
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('Processing complete!')"
        >
          Done
        </a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
          Previous
        </a-button>
      </div>
    </div>
    <a-divider />

    <div class="title"><strong>五、Cascader 级联选择器</strong></div>
    <div class="title">
      清空选中结果图标默认是鼠标移入展示，移动端该图标不可正常展示，但是点击图标所在位置可以正常清空选择结果
    </div>
    <a-cascader
      :options="options"
      placeholder="Please select"
      @change="onChange"
    />
    <a-divider />

    <div class="title"><strong>六、Checkbox 多选框</strong></div>
    <div class="title">完全可用</div>

    <div>
      <div :style="{ borderBottom: '1px solid #E9E9E9' }">
        <a-checkbox
          :indeterminate="indeterminate"
          :checked="checkAll"
          @change="onCheckAllChange"
        >
          Check all
        </a-checkbox>
      </div>
      <br />
      <a-checkbox-group
        v-model="checkedList"
        :options="plainOptions"
        @change="onChangeCheckbox"
      />
    </div>
    <a-divider />
    <div class="title"><strong>七、DatePicker 日期选择框</strong></div>
    <div class="title">
      第三项：区间日期选择器在手机端过宽，不可用。选中的结果也会闪退
      所有的选择框在手机端点击会有小键盘弹出，极为影响用户体验，这个在电脑端模拟手机测试是没有的。
    </div>
    <div>
      <a-date-picker readonly="readonly" @change="onChangeDate" />
      <br />
      <a-month-picker placeholder="Select month" @change="onChangeDate" />
      <br />
      <a-range-picker @change="onChangeDate" />
      <br />
      <a-week-picker placeholder="Select week" @change="onChangeDate" />
    </div>
    <a-divider />
    <div class="title"><strong>八、Form 表单</strong></div>
    <div class="title">
      <template>
        <a-form
          :form="form"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 6 }"
          @submit="handleSubmit"
        >
          <a-form-item label="Note">
            <a-input
              v-decorator="[
                'note',
                {
                  rules: [
                    { required: true, message: 'Please input your note!' },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item label="Gender">
            <a-select
              v-decorator="[
                'gender',
                {
                  rules: [
                    { required: true, message: 'Please select your gender!' },
                  ],
                },
              ]"
              placeholder="Select a option and change input text above"
              @change="handleSelectChange"
            >
              <a-select-option value="male"> male </a-select-option>
              <a-select-option value="female"> female </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit"> Submit </a-button>
          </a-form-item>
        </a-form>
      </template>
    </div>
    <a-divider />
    <a-button type="primary" @click="goNext()"> 下一页 </a-button>
  </div>
</template>




<script>
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];
export default {
  name: "App",
  components: {},

  data() {
    return {
      collapsed: false,
      current: 0,
      currentNav: ["mail"],
      steps: [
        {
          title: "First",
          content: "First-content",
        },
        {
          title: "Second",
          content: "Second-content",
        },
        {
          title: "Last",
          content: "Last-content",
        },
      ],
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  created() {
    document.querySelector("html").scrollTop = 0;
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    onChange(value) {
      console.log(value);
    },

    onChangeCheckbox(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },

    onChangeDate(date, dateString) {
      console.log(date, dateString);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
    goNext() {
      this.$router.push("/pages2");
      document.querySelector("html").scrollTop = 0;
    },
  },
};
</script>

<style>
</style>
