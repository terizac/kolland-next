// import request from "@/request";
import { get, post, formDataRequest } from "../request/methods"
import uri from "./uri"

export default {}

export const login = async (data) => {
  return post(uri.login, data)
}

export const create_referral_link = async (data) => {
  return post(uri.create_referral_link, data)
}

export const remove_referral_link = async (data, referral_link_id) => {
  return post(uri.remove_referral_link, data, { referral_link_id })
}
export const update_referral_link = async (data) => {
  return post(uri.update_referral_link, data)
}
export const detail_referral_link = async (referral_link_id) => {
  return get(uri.detail_referral_link, { referral_link_id })
}
export const list_referral_link = async () => {
  return get(uri.list_referral_link, {})
}

export const create_account = async (data) => {
  return post(uri.create_account, data)
}
export const remove_account = async (data, account_id) => {
  return post(uri.remove_account, data, { account_id })
}
export const update_account = async (data, account_id) => {
  return post(uri.update_account, data, { account_id })
}
export const detail_account = async (account_id) => {
  return get(uri.detail_account, { account_id })
}
export const list_account = async () => {
  return get(uri.list_account, {})
}

export const create_project = async (data) => {
  return post(uri.create_project, data)
}
export const remove_project = async (data, project_id) => {
  return post(uri.remove_project, data, { project_id })
}
export const update_project = async (data, project_id) => {
  return post(uri.update_project, data, { project_id })
}
export const detail_project = async (project_id) => {
  return get(uri.detail_project, { project_id })
}
export const list_project = async () => {
  return get(uri.list_project, {})
}