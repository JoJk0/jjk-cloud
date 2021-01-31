import { Component } from "vue";
import { RouteRecordRaw } from "vue-router";
import { Module } from "vuex";
import { State as RootState } from "@/types/store";

export type JJKExtension = {
  name: string;
  description: string;
  version: string;
  author: string;
  authorEmail: string;
  enabled: boolean;
  body: Component;

  actions?: Component;
  menu?: Component;
  menuEntry?: JJKMenuEntry;
  store?: Module<any, RootState>;
  router?: RouteRecordRaw[];
  settings?: {};
};

export type JJKExtensionList = {
  [extension: string]: JJKExtension;
};

export type JJKMenuEntry = {
  name: string;
  path: string;
  icon: string;
};
