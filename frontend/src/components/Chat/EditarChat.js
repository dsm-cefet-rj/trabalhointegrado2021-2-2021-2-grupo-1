// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";

// import chatSchema from "./ChatSchema";

// import {
//   selectChatbyId,
//   updateChat,
//   deleteChat,
//   deletechat,
// } from "../../redux/chatSlice";

// import Cabecalho from "../Cabecalho/Cabecalho";

// function EditarChat() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const chat = useSelector((state) => selectChatById(state, id));

//   const [chatForm] = useState(
//     chatSchema.cast({
//       ...chat,
//     })
//   );
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(chatSchema),
//   });

//   function checaEnvio(chat) {
//     dispatch(
//       updateChat({
//         ...chat,
//         id,
//       })
//     );
//     navigate("/empresa/chat");
//   }

//   function deletaChat(e) {
//     dispatch(deletechat(evento.id));
//     e.preventDefault();
//     navigate("/empresa/chat");
//   }

//   return (
//     <>
//       <Cabecalho usuario={"empresa"} />
//       <main className="centralizar-xy centralizar-y">
//         <h2 className="subtitulo">Editar Chat</h2>
//         {evento ? (
//           <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
//             <label>
//               Mensagem:
//               <input
//                 type="text"
//                 className={
//                   errors.nome?.message ? "input-box input-box-error" : "input-box"
//                 }
//                 defaultValue={chatForm.nome}
//                 placeholder="Rock in Rio"
//                 {...register("nome", { required: true })}
//               />
//               <span>{errors.nome?.message}</span>
//             </label>
//             <label>
//               Gênero
//               <select
//                 className={
//                   errors.genero?.message ? "input-box input-box-error" : "input-box"
//                 }
//                 defaultValue={chatForm.genero}
//                 {...register("genero", { required: true })}
//               >
//                 <option value="esporte">Esportes</option>
//                 <option value="musica">Música</option>
//                 <option value="familia">Família</option>
//               </select>
//               <span>{errors.genero?.message}</span>
//             </label>
//             <label>
//               Endereço
//               <input
//                 type="text"
//                 placeholder="Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ, 20271-130"
//                 className={
//                   errors.endereco?.message ? "input-box input-box-error" : "input-box"
//                 }
//                 defaultValue={chatForm.endereco}
//                 {...register("endereco", { required: true })}
//               />
//               <span>{errors.endereco?.message}</span>
//             </label>
//             <label>
//               Local
//               <input
//                 type="text"
//                 placeholder="Maracanã"
//                 defaultValue={chatForm.local}
//                 className={
//                   errors.local?.message ? "input-box input-box-error" : "input-box"
//                 }
//                 {...register("local", { required: true })}
//               />
//               <span>{errors.local?.message}</span>
//             </label>
//             <div className="botoes-container">
//               <input type="submit" value="Editar" className="botao" />
//               <input
//                 type="button"
//                 value="Deletar"
//                 className="botao botao-perigo"
//                 onClick={deletaChat}
//               />
//             </div>
//           </form>
//         ): (
//           <p>
//             Mensagem nao encontrada.
//           </p>
//         )}
//       </main>
//     </>
//   );
// }

// export default EditarChat;