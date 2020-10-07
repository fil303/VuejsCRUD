<template>
  <div class="divv">
    <vs-table>
      <template slot="thead">
        <vs-th> Name </vs-th>
        <vs-th> Email </vs-th>
        <vs-th> Website </vs-th>
        <vs-th> Phone </vs-th>
        <vs-th> Action </vs-th>
      </template>

      <template slot-scope="">
        <vs-tr v-for="a in getdata" :key="a.id">
          <vs-td :data="a.name">
            {{ a.name }}
          </vs-td>

          <vs-td :data="a.email">
            {{ a.email }}
          </vs-td>

          <vs-td :data="a.website">
            {{ a.website }}
          </vs-td>

          <vs-td :data="a.phone">
            {{ a.phone }}
          </vs-td>
          <vs-td>
            <vs-row
              ><vs-col vs-w="4">
                <vs-button
                  @click="(editdata = true), (show = a.id)"
                  :dataid="a.id"
                  icon="edit"
                ></vs-button></vs-col
              ><vs-col vs-w="4">
                <vs-button
                  @click="openConfirm(a.id)"
                  color="danger"
                  :dataid="a.id"
                  icon="delete"
                ></vs-button> </vs-col
            ></vs-row>

            <vs-prompt
              :id="'list' + a.id"
              v-show="a.id == show"
              color="danger"
              @cancel="j"
              @accept="acceptAlert(a.id)"
              @close="close"
              :is-valid="true"
              :active.sync="editdata"
            >
              <div class="con-exemple-prompt">
                Enter your first and last name to <b>continue</b><br /><br />
                <label>Name</label>
                <vs-input :id="'name' + a.id" v-model="a.name" />
                <br />
                <label>E-mail</label>
                <vs-input :id="'email' + a.id" v-model="a.email" />
                <br />
                <label>Website</label>
                <vs-input :id="'website' + a.id" v-model="a.website" />
                <br />
                <label>Phone</label>
                <vs-input :id="'phone' + a.id" v-model="a.phone" />

                <!-- <vs-alert :active="!validName" color="danger" icon="new_releases">
              Fields can not be empty please enter the data
            </vs-alert> -->
              </div>
            </vs-prompt>
          </vs-td>
        </vs-tr>

        <vs-tr v-if="add">
          <vs-td>
            <vs-input
              id="namein"
              icon-after="true"
              label-placeholder="icon-after"
              icon="mode_edit"
              placeholder="Name"
              v-model="data.name"
            />
          </vs-td>
          <vs-td>
            <vs-input
              id="emailin"
              icon-after="true"
              label-placeholder="icon-after"
              icon="mode_edit"
              placeholder="E-mail"
              v-model="data.email"
            />
          </vs-td>
          <vs-td>
            <vs-input
              id="websitein"
              icon-after="true"
              label-placeholder="icon-after"
              icon="mode_edit"
              placeholder="Website"
              v-model="data.website"
            />
          </vs-td>
          <vs-td>
            <vs-input
              id="phonein"
              icon-after="true"
              label-placeholder="icon-after"
              icon="mode_edit"
              placeholder="Phone"
              v-model="data.phone"
            />
          </vs-td>
        </vs-tr>

        <vs-tr v-if="add" vs-type="flex" vs-justify="center" vs-align="center">
          <vs-td v-tooltip="2"></vs-td><vs-td></vs-td>
          <vs-td
            vs-offset="5"
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
          >
            <vs-button size="large" type="relief" @click="set">
              Create
            </vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <br />
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-w="5" vs-type="flex" vs-justify="center" vs-align="center">
        <vs-button size="large" type="relief" @click="t"> Add </vs-button>
      </vs-col>
    </vs-row>
    <!-- <vs-input type="text" v-model="c"></vs-input> -->

    <!-- fghfdghdfgh
                        dfghdfghfgh
                        dfghdfghfghdfghfdgh
                        dfghdfghfghdfghfdghfgh
                        fghdfghfghfgh
                        fghfghfghfghfgh
                        fghdfghfghfgh -->
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
//import axios from 'axios'
export default {
  name: "table",
  props: ["h"],
  data() {
    return {
      a: "hello",
      add: false,
      show: "",
      editdata: false,
      deleteid: "",
      data: {
        name: "",
        email: "",
        website: "",
        phone: "",
      },
      edata: {
        name: "",
        email: "",
        website: "",
        phone: "",
      },

      //b: this.$store.state.user
    };
  },
  computed: {
    validName() {
      return (
        this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0
      );
    },

    //   Data Getter / Get
    ...mapGetters(["getdata"]),

    //  getda: function sss () {
    //     return this.$store.getters.getdata
    //  }
    // add(){
    //    return this.$store.dispatch('acc')
    // }
  },

  methods: {
    ...mapActions(["acc", "x", "d", "editaction"]),

    // ADD Row Toggleing 
    t() {
      if (this.add == true) {
        this.add = false;
      } else {
        this.add = true;
      }
    },
    //    Data  Set/Write
    set() {
      var name = document.getElementById("namein").value;
      var email = document.getElementById("emailin").value;
      var website = document.getElementById("websitein").value;
      var phone = document.getElementById("phonein").value;

      var da = {
        name: name,
        email: email,
        website: website,
        phone: phone,
      };

      this.x(da);

      this.data.name = "";
      this.data.email = "";
      this.data.website = "";
      this.data.phone = "";
      this.add = false;
      this.createddata()
    },

    //    Data  Delete
    // delet(id) {
    //   this.d(id);
    // },

    edit(id) {
      this.editaction(id);
    },

    openConfirm(id) {
      this.deleteid = id;
      this.$vs.dialog({
        type: "confirm",

        color: "danger",
        title: `Confirm`,
        text: "Are You Sure To Want Delete",
        accept: this.acceptAlertdelete,
      });
    },
    acceptAlertdelete() {
      this.$vs.notify({
        color: "danger",
        title: "Deleted Success",
        text: "The selected Row was successfully deleted",
      });
      var del = this.deleteid;
      this.d(del);
    },

    acceptAlert(id) {
      this.$vs.notify({
        color: "success",
        title: "Data Change",
        text: "You successfully Change Data",
      });
      var name = document.getElementById("name" + id).value;
      var email = document.getElementById("email" + id).value;
      var website = document.getElementById("website" + id).value;
      var phone = document.getElementById("phone" + id).value;

      axios.put("http://localhost:3000/to/" + id, {
        name: name,
        email: email,
        website: website,
        phone: phone,
      });
      this.show = 54654681;
      this.editdata = false;
    },
    close() {
      this.$vs.notify({
        color: "danger",
        title: "Closed",
        text: "You close a dialog!",
      });
      this.show = 54654681;
      this.editdata = false;
    },
    createddata() {
      this.$vs.notify({
        color: "success",
        title: "Data Create",
        text: "You successfully Create A Data",
      });
    }
  },
  created() {
    //  ADD  Data  To Stat
    this.acc();
  },
};
</script>

<style>
.divv {
  display: block;
  position: initial;
}
.con-exemple-prompt {
  padding: 10px;
  padding-bottom: 0px;
}
.vs-input {
  width: 100%;
  margin-top: 10px;
}
</style>
