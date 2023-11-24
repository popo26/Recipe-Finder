import BackBtn from "@/components/BackBtn";
import "../page.module.css";

export default function About() {
  return (
    <div className="About">
      <BackBtn />

      <h1>About</h1>
      <div className="About-message">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        suscipit condimentum est a cursus. Sed iaculis nec dui et pulvinar.
        Morbi scelerisque tempor dignissim. Donec et sapien leo. Nulla facilisi.
        Curabitur vitae diam eu ligula sodales suscipit. Proin et finibus leo.
      </p><br/>
      <p>
        Aliquam erat volutpat. Donec nec condimentum nisi. Vestibulum dignissim
        metus at tortor mattis porta. In hac habitasse platea dictumst. Aenean
        magna lacus, interdum sed fringilla eget, molestie id erat. Proin
        ultricies placerat ipsum vitae ullamcorper. Ut sed erat vel risus
        fringilla lacinia eget viverra sem. Nulla mollis, ante id sagittis
        blandit, ligula justo fringilla turpis, ac rhoncus lacus neque non
        augue. Maecenas odio tortor, imperdiet eget dolor quis, consectetur
        consectetur libero. 
      </p><br/>

      <p>
        {" "}
        Fusce ullamcorper elit nibh, eu ullamcorper enim porttitor consequat.
        Aliquam dolor sapien, laoreet quis nunc nec, mattis finibus sapien.
        Aliquam eget iaculis nulla, lacinia vestibulum erat. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti.
        Cras sed metus ac nisi pretium dignissim. Sed orci metus, congue id
        massa in, semper sollicitudin sem. Morbi vitae rutrum nisi. Maecenas
        eget commodo elit. In luctus lorem vitae nisi ornare, quis viverra felis
        euismod. Mauris tortor turpis, pharetra sed ullamcorper id, sodales sit
        amet dui. Suspendisse tempor imperdiet magna at vehicula. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Duis a tellus et nisl
        finibus posuere vitae vel diam. Phasellus viverra mauris eu risus
        efficitur venenatis. Pellentesque bibendum dictum fringilla. Duis a
        libero tempus, aliquet lacus in, lacinia lorem. Sed sed lacus nec sapien
        venenatis aliquet fermentum vitae sem. Vestibulum in elit dignissim
        lectus laoreet mollis. Praesent sed imperdiet dolor. Fusce consequat
        pellentesque est, vitae dictum ex sodales a. Nullam dignissim viverra
        lectus, vel ultrices tellus ultricies et. Nullam dictum felis purus.
      </p><br/>
      <p>
        Fusce et iaculis nisi, ut luctus enim. Curabitur vestibulum nunc quis
        sapien aliquet semper. Aenean congue nulla felis, quis hendrerit est
        cursus quis.
      </p>
      </div>
      <div className="About-photo">
        <img src={"/cooking.jpg"} alt="cooking" width="200px" />
      </div>
    </div>
  );
}
