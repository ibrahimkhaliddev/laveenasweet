import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import { useFrappePostCall } from "frappe-react-sdk"
import { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { userInfoSchema } from '../../components/forms/userInfoSchema'

const FillInfo = () => {
  const navigate = useNavigate()
  const { user, refetch } = useUser()
  const { call, isCompleted, loading } = useFrappePostCall("honda_api.api_calls.getuser.update_profile")

  useEffect(() => {
    if (isCompleted) {
      refetch().then(() => navigate("/"))
    }
  }, [isCompleted])
  useEffect(() => {
      refetch();
  }, [])

  return (
    <main className='px-5 py-[46px]'>
      <h1 className='text-[22px] font-bold'>ข้อมูลส่วนตัว</h1>
      <p className='mt-4'>กรอกข้อมูลเพิ่มเติมโดยข้อมูลเหล่านี้<br /> จะแสดงอยู่ในหน้าบัญชีของคุณ</p>
      {
        user && (
          <UserInfoForm
            validationSchema={userInfoSchema}
            initialValues={{
              first_name: user?.user.full_name.split(" ")[0],
              last_name: user?.user.full_name.split(" ").slice(1).join(" "),
              email: user?.user.email.endsWith("@line.me") ? "" : user?.user.email,
              phone: user?.user.phone,
              id_card_number: '',
              birth_date: '',
            }}
            onSubmit={call}
            isLoading={loading}
          />
        )
      }
    </main>
  )
}

export default FillInfo

export const UserInfoForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  isLoading
}) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  })
  return (
    <form className="flex flex-col gap-y-5" onSubmit={formik.handleSubmit}>
      <div className='flex flex-col'>
        <label htmlFor='first_name'>ชื่อ</label>
        <input
          className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          name='first_name'
          value={formik.values.first_name}
          onChange={formik.handleChange}
        />
        {
          formik.errors.first_name && (
            <strong className="typography-error-sm text-negative-700 font-medium">{formik.errors.first_name}</strong>
          )
        }
      </div>

      <div className='flex flex-col'>
        <label htmlFor='last_name'>นามสกุล</label>
        <input
          className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          name='last_name'
          value={formik.values.last_name}
          onChange={formik.handleChange}
        />
        {
          formik.errors.last_name && (
            <strong className="typography-error-sm text-negative-700 font-medium">{formik.errors.last_name}</strong>
          )
        }
      </div>

      <div className='flex flex-col'>
        <label htmlFor='email'>อีเมลของคุณ</label>
        <input
          className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          type='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {
          formik.errors.email && (
            <strong className="typography-error-sm text-negative-700 font-medium">{formik.errors.email}</strong>
          )
        }
      </div>

      <div className='flex flex-col'>
        <label htmlFor='id_card_number'>เลขบัตรประจำตัวประชาชน</label>
        <input
          className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          name='id_card_number'
          value={formik.values.id_card_number}
          onChange={formik.handleChange}
        />
        {
          formik.errors.id_card_number && (
            <strong className="typography-error-sm text-negative-700 font-medium">{formik.errors.id_card_number}</strong>
          )
        }
      </div>

      <div className='flex flex-col'>
        <label htmlFor='birth_date'>วัน/เดือน/ปีเกิด</label>
        <input
          className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          type="date"
          name='birth_date'
          value={formik.values.birth_date}
          onChange={formik.handleChange}
        />
        {
          formik.errors.birth_date && (
            <strong className="typography-error-sm text-negative-700 font-medium">{formik.errors.birth_date}</strong>
          )
        }
      </div>

      <div className='flex flex-col relative'>
        <label htmlFor='phone'>เบอร์โทร</label>
        <input
          disabled
          className='disabled  border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]'
          type='tel'
          name='phone'
          value={formik.values.phone}
        />
      </div>
      <footer className='flex px-5 pb-5 gap-x-3'>
        <button
          className={`w-full text-white rounded-[9px] p-3 text-center ${(!formik.isValid || isLoading) ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`}
          disabled={!formik.isValid || isLoading}
          type='submit'
        >{
            isLoading ? "กำลังโหลด..." : "ดำเนินการต่อ"
          }</button>
      </footer>
    </form>
  )
}
