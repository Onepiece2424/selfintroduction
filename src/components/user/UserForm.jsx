import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm ,Field } from 'redux-form';
import renderField from '../common/renderField';
import { createUserInfo, updateJob, updateAge, updateBloodType, updateUseBicycle, clearUserInfo, updateFavoriteColor, updateBirthday, updateEmail, updatePhysicalStrength } from '../../modules/user';

// MUI
import { Button } from '@material-ui/core';

const UserForm = ({ handleSubmit, pristine, submitting, reset }) => {

  const user = useSelector(state => state.user)
  const { name, job, age, bloodType, useBicycle, favoriteColor, birthday, email, physicalStrength } = user
  const dispatch = useDispatch()

  // クリアボタンを押したときに入力フォームの値と表示されているテキストを元に戻す
  const clear = () => {
    reset()
    dispatch(clearUserInfo())
  }

  return (
    <>
      <h4>自己紹介</h4>
      <div>名前：{name}</div>
      <div>職業：{job}</div>
      <div>年齢：{age === "40" ? `${age}歳以上` : `${age}歳`}</div>
      <div> 血液型：{`${bloodType}型`}</div>
      <div>自転車を持っているかどうか？：{ useBicycle ? "持っている。" : "持っていない。"}</div>
      <div>好きな色：{favoriteColor}</div>
      <div>生年月日：{birthday}</div>
      <div>Eメールアドレス：{email}</div>
      <div>現在の体力：{physicalStrength}</div>

      <br></br>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <br></br>
          <div>
              名前<Field name="username" component={renderField} type="textarea" onChange={(e) => dispatch(createUserInfo(e))} />
          </div>
          <br></br>
          <div>
              職業<Field name="job" component={renderField} type="textarea" onChange={(e) => dispatch(updateJob(e))} />
          </div>
          <br></br>
          <div>
            年齢：
            <label>
              <Field name="age" component="input" type="radio" value="10~19" onChange={(e) => dispatch(updateAge(e))} />10〜19歳
            </label>
            <label>
              <Field name="age" component="input" type="radio" value="20~39" onChange={(e) => dispatch(updateAge(e))} />20〜39歳
            </label>
            <label>
              <Field name="age" component="input" type="radio" value="40" onChange={(e) => dispatch(updateAge(e))} />40歳以上
            </label>
          </div>
          <br></br>
          <div>
            <label>血液型：
              <Field name="bloodType" component="select" onChange={(e) => dispatch(updateBloodType(e))}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
              </Field>
            </label>
          </div>
          <br></br>
          <div>
            自転車を持っていますか？（持っている方はチェックしてください。）
            <Field name="useBicycle" component={renderField} type="checkbox" onChange={(e) => dispatch(updateUseBicycle(e))} />
          </div>
          <br></br>
          <br></br>
          <div>
            好きな色<Field name="favoritecolor" component={renderField} type="color" onChange={(e) => dispatch(updateFavoriteColor(e))} />
          </div>
          <br></br>
          <br></br>
          <div>
            生年月日<Field name="birthday" component={renderField} type="date" onChange={(e) => dispatch(updateBirthday(e))} />
          </div>
          <br></br>
          <br></br>
          <div>
            メールアドレス<Field name="email" component={renderField} type="email" onChange={(e) => dispatch(updateEmail(e))} />
          </div>
          <br></br>
          <br></br>
          <div>
            現在の体力ゲージ<Field name="physicalStrength" component={renderField} type="range" onChange={(e) => dispatch(updatePhysicalStrength(e))} />
          </div>
          <br></br>
          {/* <div>
            入力フォーム3<Field component="input" type="textarea" />
          </div>
          <br></br>
          <div>
              入力フォーム4<Field name="commonform" component={renderField} type="checkbox" />
          </div>
          <br></br>
          <div>
            入力フォーム5<Field name="commonform" component={renderField} type="textarea" />
          </div>
          <br></br>
          <div>
            入力フォーム6<Field name="commonform" component={renderField} type="text" />
          </div>
          <br></br> */}
          <br></br>
          <Button color="secondary" variant="contained" type="submit">送信</Button>
          <Button color="secondary" variant="contained" disabled={pristine || submitting} onClick={clear}>クリア</Button>
        </form>
      </div>
    </>
  )
}

export default reduxForm({
  form: 'mainForm',
})(UserForm)
