<template>
  <div class="pages2">
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
    <div class="title"><strong>九、InputNumber 数字输入框</strong></div>
    <div class="title"></div>
    <template>
      <div>
        <a-input-number
          id="inputNumber"
          v-model="value"
          :min="1"
          :max="10"
          @change="onChange"
        />
        当前值：{{ value }}
      </div>
    </template>

    <a-divider />
    <div class="title"><strong>十、Radio 单选框</strong></div>
    <div class="title">完全可用</div>
    <a-radio-group name="radioGroup" :default-value="1">
      <a-radio :value="1"> A </a-radio>
      <a-radio :value="2"> B </a-radio>
      <a-radio :value="3"> C </a-radio>
      <a-radio :value="4"> D </a-radio>
    </a-radio-group>
    <a-divider />

    <div>
      <div>
        <a-radio-group default-value="a" button-style="solid">
          <a-radio-button value="a"> Hangzhou </a-radio-button>
          <a-radio-button value="b"> Shanghai </a-radio-button>
          <a-radio-button value="c"> Beijing </a-radio-button>
          <a-radio-button value="d"> Chengdu </a-radio-button>
        </a-radio-group>
      </div>
      <div :style="{ marginTop: '16px' }">
        <a-radio-group default-value="c" button-style="solid">
          <a-radio-button value="a"> Hangzhou </a-radio-button>
          <a-radio-button value="b" disabled> Shanghai </a-radio-button>
          <a-radio-button value="c"> Beijing </a-radio-button>
          <a-radio-button value="d"> Chengdu </a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <a-divider />

    <a-divider />
    <div class="title"><strong>十一、Rate 评分</strong></div>
    <div class="title">完全可用，选择半心时有时会误选</div>
    <span>基本</span><a-rate v-model="valuerate1" /> <br /><span>半星</span>
    <a-rate :default-value="2.5" allow-half />
    <a-divider />
    <div class="title"><strong>十二、Select 选择器</strong></div>
    <div class="title">
      点击时会调出小键盘，其他类似组件如日期选择器、时间选择器也会拉起小键盘
    </div>

    <a-select
      mode="multiple"
      :default-value="['a1', 'b2']"
      style="width: 100%"
      placeholder="Please select"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>

    <div class="title"><strong>十三、Slider 滑动输入条</strong></div>
    <div class="title">完全可用</div>
    <div>
      <a-slider id="test" :default-value="30" :disabled="disabled" />
      <a-slider range :default-value="[20, 50]" :disabled="disabled" />
      Disabled:
      <a-switch
        size="small"
        :checked="disabled"
        @change="handleDisabledChange"
      />
    </div>
    <a-divider />

    <div class="title"><strong>十四、TimePicker 时间选择框</strong></div>
    <div class="title">
      需要先点击弹出框后再进行滑动才可以，点击组件后会拉起小键盘，支持移动端滑动切换
    </div>
    <span>时 分</span
    ><a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />
    <br />
    <br />
    <span>时分秒</span>
    <a-time-picker :default-open-value="moment('00:00:00', 'HH:mm:ss')" />
    <a-divider />

    <div class="title"><strong>十五、Transfer 穿梭框</strong></div>
    <div class="title">
      功能可以实现但是样式较为怪异，为竖向排列。支持移动端滑动切换
    </div>
    <a-transfer
      :data-source="mockData"
      :titles="['Source', 'Target']"
      :target-keys="targetKeys"
      :selected-keys="selectedKeys"
      :render="(item) => item.title"
      :disabled="disabled1"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @scroll="handleScroll"
    />
    <a-switch
      un-checked-children="enabled"
      checked-children="disabled1"
      :checked="disabled1"
      style="margin-top: 16px"
      @change="handleDisable"
    />
    <a-divider />
    <a-button type="primary" @click="goNext()"> 下一页 </a-button>
    <a-divider />
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled1: i % 3 < 1,
      });
    }

    const oriTargetKeys = mockData
      .filter((item) => +item.key % 3 > 1)
      .map((item) => item.key);
    return {
      value: 3,
      valuerate1: 2,
      disabled: false,
      mockData,
      targetKeys: oriTargetKeys,
      selectedKeys: ["1", "4"],
      disabled1: false,
      currentNav: ["mail"],
    };
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
    },
    handleDisabledChange(disabled) {
      this.disabled = disabled;
    },
    moment,
    handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys;

      console.log("targetKeys: ", nextTargetKeys);
      console.log("direction: ", direction);
      console.log("moveKeys: ", moveKeys);
    },
    handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];

      console.log("sourceSelectedKeys: ", sourceSelectedKeys);
      console.log("targetSelectedKeys: ", targetSelectedKeys);
    },
    handleScroll(direction, e) {
      console.log("direction:", direction);
      console.log("target:", e.target);
    },
    handleDisable(disabled) {
      this.disabled = disabled;
    },
    goNext() {
      this.$router.push("/pages3");
    },
  },
  created() {
    document.querySelector("html").scrollTop = 0;
  },
};
</script>

<style>
</style>