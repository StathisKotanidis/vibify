"use client";
import { FaGears } from "react-icons/fa6";

export default function DashboardForm() {
  return (
    <form className="flex p-2 basis-[90%] flex-col w-full items-center justify-around">
      <textarea
        placeholder="Your vibe matters! Share your feelings, and let the music reflect them."
        className="h-52 w-full p-2 rounded-md"
      ></textarea>
      <div className="flex flex-col gap-2 items-center w-4/5">
        <label className="text-md text-center sm:text-lg" htmlFor="genre">
          Any specific genre preference?
        </label>
        <select className="p-2 w-3/4 sm:w-2/4" name="genre" id="genre">
          <option value="any">Not really!</option>
          <option value="rock">Rock</option>
          <option value="rap">Rap</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
          <option value="country">Country</option>
          <option value="classical">Classical</option>
          <option value="metal">Metal</option>
          <option value="indie/alternative">Indie/Alternative</option>
          <option value="electronic music">Electronic Music</option>
          <option value="reggae">Reggae</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-4/5 items-center">
        <label className="text-md text-center sm:text-lg ">
          Number of songs preference?
        </label>
        <input
          className="w-3/4 p-2 sm:w-2/4"
          type="number"
          defaultValue={20}
        ></input>
      </div>

      <button className="flex gap-2 bg-mainColor items-center text-white rounded-md p-3 w-48">
        <FaGears />
        <span>Generate playlist</span>
      </button>
    </form>
  );
}
